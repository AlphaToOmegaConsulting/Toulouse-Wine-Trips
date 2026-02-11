import React from 'react';

type IconName =
  | 'arrow_forward'
  | 'check_circle'
  | 'expand_more'
  | 'contact_support'
  | 'mail'
  | 'schedule'
  | 'bolt'
  | 'place'
  | 'menu'
  | 'close'
  | 'home'
  | 'school'
  | 'explore'
  | 'person'
  | 'groups_3'
  | 'groups'
  | 'menu_book'
  | 'trending_up'
  | 'laptop_mac'
  | 'child_care';

type IconProps = {
  name: IconName | string;
  className?: string;
};

const commonStrokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.8,
};

const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const iconClass = `inline-block h-[1em] w-[1em] shrink-0 align-middle ${className}`.trim();

  const renderIcon = () => {
    switch (name) {
      case 'arrow_forward':
        return <path {...commonStrokeProps} d="M5 12h14m-6-6 6 6-6 6" />;
      case 'check_circle':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="12" r="9" />
            <path {...commonStrokeProps} d="m8.4 12.3 2.4 2.4 4.8-5" />
          </>
        );
      case 'expand_more':
        return <path {...commonStrokeProps} d="m7 10 5 5 5-5" />;
      case 'contact_support':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="12" r="9" />
            <path {...commonStrokeProps} d="M9.5 9.3a2.5 2.5 0 1 1 4.3 1.8c-.9.8-1.8 1.3-1.8 2.4" />
            <circle cx="12" cy="16.6" r="1" fill="currentColor" />
          </>
        );
      case 'mail':
        return (
          <>
            <rect {...commonStrokeProps} x="3" y="6" width="18" height="12" rx="2" />
            <path {...commonStrokeProps} d="m4 8 8 6 8-6" />
          </>
        );
      case 'schedule':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="12" r="9" />
            <path {...commonStrokeProps} d="M12 7v5l3 2" />
          </>
        );
      case 'bolt':
        return <path {...commonStrokeProps} d="m13 3-7 10h5l-1 8 8-11h-5z" />;
      case 'place':
        return (
          <>
            <path {...commonStrokeProps} d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" />
            <circle {...commonStrokeProps} cx="12" cy="11" r="2.5" />
          </>
        );
      case 'menu':
        return <path {...commonStrokeProps} d="M4 7h16M4 12h16M4 17h16" />;
      case 'close':
        return <path {...commonStrokeProps} d="m6 6 12 12M18 6 6 18" />;
      case 'home':
        return (
          <>
            <path {...commonStrokeProps} d="m4 11 8-6 8 6" />
            <path {...commonStrokeProps} d="M7 10v9h10v-9" />
          </>
        );
      case 'school':
        return (
          <>
            <path {...commonStrokeProps} d="m3 9 9-4 9 4-9 4-9-4Z" />
            <path {...commonStrokeProps} d="M7 11v4c0 1.7 2.4 3 5 3s5-1.3 5-3v-4" />
          </>
        );
      case 'explore':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="12" r="9" />
            <path {...commonStrokeProps} d="m9 15 2-6 6-2-2 6-6 2Z" />
          </>
        );
      case 'person':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="8" r="3.2" />
            <path {...commonStrokeProps} d="M5.5 18.5a6.5 6.5 0 0 1 13 0" />
          </>
        );
      case 'groups_3':
      case 'groups':
        return (
          <>
            <circle {...commonStrokeProps} cx="7.5" cy="10" r="2.4" />
            <circle {...commonStrokeProps} cx="12" cy="8.8" r="2.8" />
            <circle {...commonStrokeProps} cx="16.5" cy="10" r="2.4" />
            <path {...commonStrokeProps} d="M3.8 17a4 4 0 0 1 5.8-2.8M14.4 14.2a4 4 0 0 1 5.8 2.8M8 18a4.7 4.7 0 0 1 8 0" />
          </>
        );
      case 'menu_book':
        return (
          <>
            <path {...commonStrokeProps} d="M4.5 6.5A3.5 3.5 0 0 1 8 3h11v15H8a3.5 3.5 0 0 0-3.5 3.5" />
            <path {...commonStrokeProps} d="M8 3v15" />
          </>
        );
      case 'trending_up':
        return <path {...commonStrokeProps} d="M4 16 10 10l4 4 6-7M16 7h4v4" />;
      case 'laptop_mac':
        return (
          <>
            <rect {...commonStrokeProps} x="5" y="6" width="14" height="9" rx="1.6" />
            <path {...commonStrokeProps} d="M3 18h18" />
          </>
        );
      case 'child_care':
        return (
          <>
            <circle {...commonStrokeProps} cx="12" cy="7.8" r="2.7" />
            <path {...commonStrokeProps} d="M7.5 20a4.5 4.5 0 0 1 9 0M6 13.5l3 2m9-2-3 2" />
          </>
        );
      default:
        return <circle {...commonStrokeProps} cx="12" cy="12" r="9" />;
    }
  };

  return (
    <svg
      aria-hidden="true"
      className={iconClass}
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcon()}
    </svg>
  );
};

export default Icon;
