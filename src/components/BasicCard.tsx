import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BasicCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const [showCode, setShowCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const code = `
    import React from 'react';

    interface CardProps {
      title: string;
      description: string;
      imageUrl: string;
    }

    const BasicCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
      return (
        <div className="relative p-5 flex justify-center items-center perspective-1000">
          <div className="relative group w-80 h-96 rounded-lg shadow-lg transform transition-all duration-500 hover:rotateY-180 bg-white">
            <div className=" inset-0">
              <div className="bg-white w-full h-full rounded-lg p-4 flex flex-col justify-center items-center">
                <img
                  className="rounded-lg w-56 h-36 object-cover"
                  src={imageUrl}
                  alt={title}
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-800">{title}</h2>
              </div>
            </div>
            <div className=" inset-0 transform rotateY-180 backface-hidden">
              <div className="p-4 w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-4 text-center">{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default BasicCard;
  `;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true); 
      setTimeout(() => setIsCopied(false), 5000); 
    }).catch((err) => {
      console.error('Failed to copy code: ', err);
    });
  };

  return (
    <div className="relative p-5 flex flex-col justify-center items-center perspective-1000">
      <div className="relative group w-80 h-96 rounded-lg shadow-lg transform transition-all duration-500 hover:rotateY-180 bg-white">
        <div className=" inset-0">
          <div className="bg-white w-full h-full rounded-lg p-4 flex flex-col justify-center items-center">
            <img
              className="rounded-lg w-56 h-36 object-cover"
              src={imageUrl}
              alt={title}
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{title}</h2>
          </div>
        </div>
        <div className=" inset-0 transform rotateY-180 backface-hidden">
          <div className="p-4 w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-4 text-center">{description}</p>
          </div>
        </div>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? 'Hide Editor' : 'Show Editor'}
      </button>

      {showCode && (
        <div className="w-full mt-4 p-4">
          <CodeMirror
            value={code}
            editable={false}
            height="300px"
            extensions={[javascript({ jsx: true })]}
            theme="dark"
          />

          <button
            className={`mt-4 ${isCopied ? 'bg-gray-500' : 'bg-green-500'} text-white px-4 py-2 rounded-lg`}
            onClick={copyCodeToClipboard}
            disabled={isCopied}
          >
            {isCopied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BasicCard;
