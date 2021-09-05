import * as React from 'react';

export function SvgGoogle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#google_svg__clip0)">
                <path
                    d="M6.336 15.371l-.87 3.249-3.18.067a12.444 12.444 0 01-1.49-5.924c0-2.073.504-4.027 1.398-5.748l2.832.519 1.24 2.814a7.43 7.43 0 00-.4 2.415c0 .918.165 1.797.47 2.608z"
                    fill="#FBBB00"
                />
                <path
                    d="M25.578 10.428c.143.756.218 1.537.218 2.335 0 .895-.094 1.768-.273 2.61a12.498 12.498 0 01-4.401 7.138h-.001l-3.567-.183-.505-3.15a7.45 7.45 0 003.206-3.805H13.57v-4.945h12.007z"
                    fill="#518EF8"
                />
                <path
                    d="M21.12 22.51l.002.001a12.447 12.447 0 01-7.826 2.752c-4.76 0-8.9-2.66-11.01-6.576l4.05-3.316a7.432 7.432 0 0010.713 3.806l4.072 3.333z"
                    fill="#28B446"
                />
                <path
                    d="M21.275 3.14l-4.05 3.316a7.435 7.435 0 00-10.959 3.892L2.194 7.015A12.498 12.498 0 0113.296.263c3.033 0 5.814 1.08 7.979 2.878z"
                    fill="#F14336"
                />
            </g>
            <defs>
                <clipPath id="google_svg__clip0">
                    <path
                        fill="#fff"
                        transform="translate(.796 .263)"
                        d="M0 0h25v25H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
