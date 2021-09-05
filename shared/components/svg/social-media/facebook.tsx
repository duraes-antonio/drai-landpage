import * as React from 'react';

export function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={26}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#facebook_svg__clip0)">
                <path
                    d="M25.796 12.5c0-6.904-5.596-12.5-12.5-12.5S.796 5.596.796 12.5c0 6.24 4.571 11.41 10.547 12.348v-8.735H8.169V12.5h3.174V9.746c0-3.133 1.866-4.863 4.721-4.863 1.368 0 2.798.244 2.798.244v3.076h-1.576c-1.553 0-2.037.964-2.037 1.952V12.5h3.467l-.554 3.613h-2.913v8.735c5.976-.938 10.547-6.109 10.547-12.348z"
                    fill="#1877F2"
                />
                <path
                    d="M18.162 16.113l.554-3.613h-3.467v-2.345c0-.988.484-1.952 2.037-1.952h1.576V5.127s-1.43-.244-2.798-.244c-2.855 0-4.721 1.73-4.721 4.863V12.5H8.169v3.613h3.174v8.735c1.294.203 2.612.203 3.906 0v-8.735h2.913z"
                    fill="#fff"
                />
            </g>
            <defs>
                <clipPath id="facebook_svg__clip0">
                    <path
                        fill="#fff"
                        transform="translate(.796)"
                        d="M0 0h25v25H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
