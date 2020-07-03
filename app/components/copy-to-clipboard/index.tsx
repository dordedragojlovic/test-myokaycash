import React, { useRef, useState } from 'react';

import { PageContainer } from './styles';

function CopyToClipboard( {text} : {text: string}) {
    const [copySuccess, setCopySuccess] = useState('Copy');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        (textAreaRef as any).current.select();

        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied !');
    };

  return (
      <PageContainer>
        <form>
            <textarea ref={textAreaRef} defaultValue={text} />
        </form>
        {
        document.queryCommandSupported('copy') &&
            <div>
                <button onClick={copyToClipboard}>{copySuccess}</button>
            </div>
        }
    </PageContainer>
  );
}

export default CopyToClipboard;
