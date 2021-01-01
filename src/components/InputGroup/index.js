import React, { useState } from "react";
import clsx from "clsx";
import { camelCase, capitalCase } from "change-case";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function InputGroup(props) {
  const {
    title,
    value,
    valueOnChange,
    enableSelect,
    selectOptions,
    selectValue,
    selectOnChange,
    isDisabled,
    enableCopyButton,
    copyValue,
    isValid = true,
  } = props;

  const [hover, setHover] = useState(false);

  const id = "inputGroup" + capitalCase(camelCase(title));
  const inputCLassNames = clsx(
    "appearance-none block w-full sm:text-sm rounded-md",
    {
      "pr-12": enableSelect,
      "focus:border-blue-500 focus:ring-blue-500 border-gray-300": isValid,
      "focus:border-red-500 focus:ring-red-500 border-red-300": !isValid,
    }
  );
  const copyButtonClasses = clsx(
    "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",
    {
      "text-gray-500 hover:text-gray-700": hover,
      "text-transparent": !hover,
    }
  );

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text font-medium text-gray-700">
        {title}
      </label>
      <div
        className="mt-1 relative rounded-md shadow-sm"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          type="text"
          name={id}
          id={id}
          className={inputCLassNames}
          placeholder="0"
          value={value}
          onChange={valueOnChange}
          disabled={isDisabled}
        />
        {enableSelect && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="unit" className="sr-only">
              selection
            </label>
            <select
              id="unit"
              name="unit"
              className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              value={selectValue}
              onChange={selectOnChange}
            >
              {selectOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {enableCopyButton && (
          <CopyToClipboard text={copyValue ? copyValue : value}>
            <div className={copyButtonClasses}>
              <span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"></path>
                </svg>
              </span>
            </div>
          </CopyToClipboard>
        )}
        {isValid === false && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="text-red-500">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="transform transition-transform duration-500 ease-in-out"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
