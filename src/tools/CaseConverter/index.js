import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

import { InputGroup } from "@/components/InputGroup";

export function CaseConverter() {
  const [text, setText] = useState("CaseConverter");

  return (
    <div id="caseConverter">
      <h1 className="text-2xl my-5 font-bold text-gray-900">Case Converter</h1>
      <div>
        <div>
          <InputGroup
            title="Text"
            value={text}
            valueOnChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr className="mt-6 mb-5"></hr>
        <div className="grid gap-5 grid-cols-2 grid-rows-1 pb-8">
          <InputGroup
            title="camelCase"
            value={camelCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="PascalCase"
            value={pascalCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="snake_case"
            value={snakeCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="CONSTANT_CASE"
            value={constantCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="Capital Case"
            value={capitalCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="dot.case"
            value={dotCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="Header-Case"
            value={headerCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="no case"
            value={noCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="param-case"
            value={paramCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="path/case"
            value={pathCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="Sentence case"
            value={sentenceCase(text)}
            isDisabled={true}
            enableCopyButton={true}
          />
        </div>
      </div>
    </div>
  );
}
