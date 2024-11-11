// components/CodeBlock.tsx
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // You can choose any theme you prefer

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <pre className='w-3/3'>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );
};

export default CodeBlock;
