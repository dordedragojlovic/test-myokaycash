import React, { useRef, useState } from 'react';

import { PageContainer } from './styles';
import IconButton from 'components/icon-button';
import Copy from 'components/icons/copy';

function CopyToClipboard( {text} : {text: string}) {
    const [copySuccess, setCopySuccess] = useState('Copy');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        (textAreaRef as any).current.select();

        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied');
    };

  return (
      <PageContainer>
        <form>
            <textarea ref={textAreaRef} defaultValue={text} />
        </form>
        {
        document.queryCommandSupported('copy') &&
            <IconButton text={copySuccess} icon={Copy} onClick={copyToClipboard}/>
        }
    </PageContainer>
  );
}

export default CopyToClipboard;
