// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef, useState } from 'react';

import { useImageMod } from './useImageMod';

type Status = 'loading' | 'failed' | 'loaded';

interface UseImageProps {
    src: string;
    moderate?: boolean;
}

export const isURL = (url: string = '') => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

export function useImage({ src, moderate = true }: UseImageProps) {
    const [status, setStatus] = useState<Status>('loading');
    const formatted = src?.replace(/^ipfs:\/\//, 'https://ipfs.io/ipfs/');
    const { data: allowed, isFetched } = useImageMod({
        url: formatted,
    });

    const ref = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        // todo: this is a little bit of a late night hack
        if (!isURL(src)) {
            setStatus('failed');
            return;
        }
        const img = new globalThis.Image();
        ref.current = img;
        img.src = src;
        img.onload = () => setStatus('loaded');
        img.onerror = () => setStatus('failed');
    }, [src, moderate]);

    useEffect(() => {
        if (ref.current?.complete && isFetched) {
            setStatus('loaded');
        }
    }, [ref.current?.complete, allowed, isFetched]);

    return { nsfw: !allowed, url: formatted, status, ref };
}

export default useImage;
