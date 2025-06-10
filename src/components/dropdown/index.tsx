import { useState, useRef, useEffect } from "react";

type Props = {
    options: string[];
    name: string;
    id: string;
    label: string;
    placeholder?: string;
};

const SearchableDropdown = ({ options, name, id, label, placeholder }: Props) => {
    const [search, setSearch] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (value: string) => {
        setSelected(value);
        setSearch("");
        setShowOptions(false);
    };

    const clearSearch = () => setSearch("");

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setShowOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="searchable-dropdown" ref={containerRef}>
            <label htmlFor={id} className="labelHide">{label}</label>
            <input
                type="hidden"
                name={name}
                value={selected}
                required={true}
            />
            <div className="input-wrapper" onClick={() => setShowOptions(true)}>
                <input
                    id={id}
                    type="text"
                    placeholder={placeholder || "Select an option"}
                    value={selected || search}
                    onChange={(e) => {
                        setSelected("");
                        setSearch(e.target.value);
                        setShowOptions(true);
                    }}
                    autoComplete="off"
                    required={true}
                />
                {search.length > 0 && (
                    <button
                        type="button"
                        className="clear-btn"
                        onClick={clearSearch}
                        aria-label="Clear"
                    >
                        ×
                    </button>
                )}
            </div>
            {showOptions && (
                <div className="dropdown-list">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((opt) => (
                            <div key={opt} onClick={() => handleSelect(opt)}>
                                {opt}
                            </div>
                        ))
                    ) : (
                        <span className="no-results">No results</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchableDropdown;
