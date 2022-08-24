export const CaretDownIcon = ({
  width = '16',
  height = '16',
  direction = 'up',
  className,
  handleClick,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    onClick={handleClick}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform={`rotate(${direction === 'up' ? 180 : 0} 8 8)`}>
      <path
        d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z"
        fill="#3B3938"
      />
    </g>
  </svg>
);

export const MenuVerticalIcon = ({ width = '24', height = '24', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  >
    <circle cx="16" cy="8" r="2" fill="#251C17" />
    <circle cx="16" cy="16" r="2" fill="#251C17" />
    <circle cx="16" cy="24" r="2" fill="#251C17" />
  </svg>
);

export const LogoIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 10.3175L5.54307 2.22222L10.0375 10.3175H0Z" fill="current-color" />
    <path d="M30.7116 0H9.13858L14.9813 10.6349H24.8689L30.7116 0Z" fill="current-color" />
    <path d="M29.8127 10.3175L34.3071 2.38095L40 10.3175H29.8127Z" fill="current-color" />
    <path d="M22.1723 40L27.5655 14.9206H40L22.1723 40Z" fill="current-color" />
    <path d="M0 14.9206L17.5281 40L12.2846 14.9206H0Z" fill="current-color" />
    <path d="M23.3708 14.9206H16.3296L19.9251 31.1111L23.3708 14.9206Z" fill="current-color" />
  </svg>
);

export const SearchIcon = ({ width = '24', height = '24', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="#251C17" strokeWidth="1.5" />
    <circle cx="11" cy="11" r="7" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" />
    <path d="M20 20L17 17" stroke="#251C17" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M20 20L17 17"
      stroke="black"
      strokeOpacity="0.2"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BasketIcon = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33334 5.33325H7.77179C8.52174 5.33325 8.89672 5.33325 9.16798 5.54505C9.43924 5.75684 9.53019 6.12062 9.71208 6.84818L10.0199 8.07954C10.2759 9.1034 10.4039 9.61533 10.7169 9.97649C10.8866 10.1723 11.0928 10.3333 11.324 10.4505C11.7503 10.6666 12.278 10.6666 13.3333 10.6666V10.6666"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 22.6667H10.0679C9.45671 22.6667 9.15112 22.6667 8.93982 22.561C8.64666 22.4142 8.44405 22.1331 8.39754 21.8086C8.36402 21.5747 8.46065 21.2848 8.65392 20.705V20.705C8.86804 20.0626 8.97511 19.7414 9.15649 19.4916C9.40793 19.1454 9.76379 18.8889 10.1718 18.7598C10.4661 18.6667 10.8047 18.6667 11.4818 18.6667H18.6667"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1945 18.6667H14.0552C12.4368 18.6667 11.6277 18.6667 11.0682 18.1928C10.5087 17.7188 10.3757 16.9207 10.1096 15.3243L9.91554 14.1599C9.64529 12.5384 9.51016 11.7276 9.9595 11.1972C10.4089 10.6667 11.2308 10.6667 12.8747 10.6667H23.4306C24.881 10.6667 25.6062 10.6667 25.8993 11.141C26.1924 11.6153 25.8681 12.2639 25.2195 13.5612L23.7723 16.4556C23.2343 17.5314 22.9654 18.0694 22.4821 18.3681C21.9988 18.6667 21.3974 18.6667 20.1945 18.6667Z"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="22.6667" cy="26.6666" r="1.33333" fill="#33363F" />
    <circle cx="12" cy="26.6666" r="1.33333" fill="#33363F" />
  </svg>
);

export const FavoriteIcon = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.93424 18.5442L15.3153 27.3567C15.6398 27.6615 15.802 27.8139 16 27.8139C16.198 27.8139 16.3602 27.6615 16.6847 27.3567L26.0658 18.5442C28.674 16.094 28.9907 12.0621 26.7971 9.23467L26.3846 8.70304C23.7604 5.32069 18.4928 5.88794 16.6489 9.75145C16.3884 10.2972 15.6116 10.2972 15.3511 9.75145C13.5072 5.88794 8.23964 5.32069 5.6154 8.70304L5.20293 9.23467C3.00927 12.0621 3.32601 16.094 5.93424 18.5442Z"
      stroke="#33363F"
      strokeWidth="2"
    />
  </svg>
);

export const UserIcon = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="9.33333"
      r="5.33333"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.5292 22.9362C8.39099 20.1977 11.105 18.6667 13.9759 18.6667H18.0241C20.8949 18.6667 23.609 20.1977 24.4708 22.9362C24.8584 24.168 25.1852 25.5686 25.2944 27.0009C25.3364 27.5516 24.8856 28.0001 24.3333 28.0001H7.66665C7.11437 28.0001 6.6636 27.5516 6.70559 27.0009C6.81481 25.5686 7.14155 24.168 7.5292 22.9362Z"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowForwardIcon = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.07666 13.4867L5.25666 14.6667L11.9233 8.00004L5.25666 1.33337L4.07666 2.51337L9.56333 8.00004L4.07666 13.4867Z"
      fill="black"
    />
  </svg>
);

export const NavigateNextIcon = ({ width = '24', height = '24', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
      fill="#626262"
    />
  </svg>
);

export const KeyboardArrowRightIcon = ({ width = '11', height = '16', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.933594 13.9459L6.77291 8.14601L0.933594 2.34609L2.7357 0.556152L10.3771 8.14601L2.7357 15.7359L0.933594 13.9459Z"
      fill="#251C17"
    />
    <path
      d="M0.933594 13.9459L6.77291 8.14601L0.933594 2.34609L2.7357 0.556152L10.3771 8.14601L2.7357 15.7359L0.933594 13.9459Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

export const DoubleArrowLeftIcon = ({ width = '11', height = '16', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 11 16"
  >
    <path fill="currentColor" d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z" />
    <path fill="currentColor" d="m11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const FacebookIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z"
      fill="#301C13"
    />
  </svg>
);

export const FacebookColorIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height="40" rx="20" fill="#1877F2" />
    <path
      d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z"
      fill="white"
    />
  </svg>
);

export const GoogleColorIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.2 20.4546C39.2 19.0364 39.0727 17.6727 38.8364 16.3636H20V24.1H30.7636C30.3 26.6 28.8909 28.7182 26.7727 30.1364V35.1546H33.2364C37.0182 31.6727 39.2 26.5455 39.2 20.4546Z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9999 39.9999C25.3999 39.9999 29.9272 38.209 33.2363 35.1545L26.7727 30.1363C24.9817 31.3363 22.6908 32.0454 19.9999 32.0454C14.7908 32.0454 10.3817 28.5272 8.80901 23.7999H2.1272V28.9817C5.41811 35.5181 12.1817 39.9999 19.9999 39.9999Z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.80909 23.8C8.40909 22.6 8.18182 21.3182 8.18182 20C8.18182 18.6818 8.40909 17.4 8.80909 16.2V11.0182H2.12727C0.772727 13.7182 0 16.7727 0 20C0 23.2273 0.772727 26.2818 2.12727 28.9818L8.80909 23.8Z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9999 7.95455C22.9363 7.95455 25.5727 8.96364 27.6454 10.9455L33.3817 5.20909C29.9181 1.98182 25.3908 0 19.9999 0C12.1817 0 5.41811 4.48182 2.1272 11.0182L8.80901 16.2C10.3817 11.4727 14.7908 7.95455 19.9999 7.95455Z"
      fill="#EA4335"
    />
  </svg>
);

export const TwitterIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.095 11.9679C35.1105 12.3199 35.1105 12.6559 35.1105 13.0079C35.1259 23.68 27.2851 36 12.9464 36C8.7173 36 4.56539 34.736 1 32.368C1.61738 32.448 2.23477 32.48 2.85215 32.48C6.35581 32.48 9.76686 31.264 12.5297 29.008C9.19578 28.944 6.2632 26.688 5.24452 23.392C6.41755 23.632 7.62145 23.584 8.76361 23.248C5.13647 22.512 2.52803 19.1999 2.51259 15.3439C2.51259 15.3119 2.51259 15.2799 2.51259 15.2479C3.59301 15.8719 4.81235 16.2239 6.04712 16.2559C2.63607 13.8879 1.57108 9.16791 3.63932 5.4719C7.60601 10.5279 13.4403 13.5839 19.7067 13.9199C19.0739 11.1199 19.9383 8.17591 21.9602 6.1919C25.0934 3.13589 30.0325 3.2959 32.9959 6.54391C34.7401 6.1919 36.4224 5.5199 37.9504 4.5759C37.3639 6.44791 36.1446 8.03191 34.524 9.03991C36.0674 8.84791 37.58 8.41591 39 7.77591C37.9504 9.40792 36.6231 10.8159 35.095 11.9679Z"
      fill="#301C13"
    />
  </svg>
);

export const InstagramIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_294_694)">
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046ZM20 0C14.5693 0 13.8865 0.023819 11.7507 0.119095C9.62287 0.214371 8.16992 0.555776 6.89957 1.04803C5.58158 1.55617 4.47003 2.24692 3.35848 3.35848C2.24692 4.47003 1.56411 5.58952 1.04804 6.89956C0.555776 8.16991 0.214371 9.62287 0.119095 11.7586C0.023819 13.8865 0 14.5693 0 20C0 25.4307 0.023819 26.1135 0.119095 28.2493C0.214371 30.3771 0.555776 31.8301 1.04804 33.1084C1.55617 34.4264 2.24692 35.5379 3.35848 36.6495C4.47003 37.761 5.58952 38.4438 6.89957 38.9599C8.16992 39.4522 9.62287 39.7936 11.7586 39.8888C13.8944 39.9841 14.5693 40.0079 20.008 40.0079C25.4466 40.0079 26.1215 39.9841 28.2573 39.8888C30.3851 39.7936 31.8381 39.4522 33.1163 38.9599C34.4343 38.4518 35.5459 37.761 36.6574 36.6495C37.769 35.5379 38.4518 34.4184 38.9679 33.1084C39.4601 31.838 39.8015 30.3851 39.8968 28.2493C39.9921 26.1135 40.0159 25.4387 40.0159 20C40.0159 14.5613 39.9921 13.8865 39.8968 11.7507C39.8015 9.62287 39.4601 8.16991 38.9679 6.89162C38.4597 5.57364 37.769 4.46209 36.6574 3.35054C35.5459 2.23898 34.4264 1.55617 33.1163 1.0401C31.846 0.547836 30.393 0.206431 28.2573 0.111155C26.1136 0.023819 25.4307 0 20 0Z"
        fill="#301C13"
      />
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046Z"
        fill="#301C13"
      />
      <path
        d="M20 9.73401C14.3311 9.73401 9.72607 14.3311 9.72607 20.0079C9.72607 25.6848 14.3231 30.2818 20 30.2818C25.6768 30.2818 30.2739 25.6848 30.2739 20.0079C30.2739 14.3311 25.6768 9.73401 20 9.73401ZM20 26.6693C16.316 26.6693 13.3307 23.684 13.3307 20C13.3307 16.316 16.316 13.3307 20 13.3307C23.684 13.3307 26.6693 16.316 26.6693 20C26.6693 23.684 23.684 26.6693 20 26.6693Z"
        fill="white"
      />
      <path
        d="M30.6788 11.7189C32.0031 11.7189 33.0766 10.6454 33.0766 9.32112C33.0766 7.99686 32.0031 6.92334 30.6788 6.92334C29.3546 6.92334 28.2811 7.99686 28.2811 9.32112C28.2811 10.6454 29.3546 11.7189 30.6788 11.7189Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_294_694">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TikTokIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="#301C13"
    />
    <path
      d="M26.3811 6H21.4485V25.0724C21.4485 27.3449 19.5515 29.2116 17.1906 29.2116C14.8297 29.2116 12.9325 27.3449 12.9325 25.0724C12.9325 22.8406 14.7875 21.0145 17.0641 20.9333V16.1449C12.0472 16.2261 8 20.1623 8 25.0724C8 30.0232 12.1315 34 17.2327 34C22.3339 34 26.4654 29.9826 26.4654 25.0724V15.2927C28.3204 16.5913 30.5969 17.3623 33 17.4029V12.6145C29.2901 12.4928 26.3811 9.57101 26.3811 6Z"
      fill="white"
    />
  </svg>
);

export const PinterestIcon = ({ width = '40', height = '40', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 42 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7202 0C9.26016 0 0 8.95104 0 19.9918C0 28.4656 5.45718 35.7055 13.1655 38.6178C12.9779 37.0382 12.8244 34.603 13.2337 32.8754C13.6088 31.3122 15.6553 22.9371 15.6553 22.9371C15.6553 22.9371 15.0414 21.7359 15.0414 19.9753C15.0414 17.1946 16.7126 15.1214 18.7932 15.1214C20.5667 15.1214 21.4194 16.4048 21.4194 17.935C21.4194 19.6462 20.2939 22.2131 19.697 24.5989C19.2025 26.5899 20.7373 28.2188 22.7667 28.2188C26.4503 28.2188 29.2812 24.4673 29.2812 19.0704C29.2812 14.2822 25.717 10.942 20.6179 10.942C14.7173 10.942 11.2554 15.2036 11.2554 19.6133C11.2554 21.3246 11.9376 23.1674 12.7903 24.1711C12.9608 24.3686 12.9779 24.5496 12.9267 24.747C12.7732 25.3723 12.4151 26.738 12.3469 27.0177C12.2616 27.3797 12.0399 27.462 11.6477 27.281C9.0896 26.0962 7.48656 22.4434 7.48656 19.5146C7.48656 13.2127 12.2275 7.4208 21.1807 7.4208C28.3603 7.4208 33.9539 12.357 33.9539 18.9716C33.9539 25.8659 29.4517 31.411 23.2101 31.411C21.1124 31.411 19.1342 30.3579 18.4692 29.1074C18.4692 29.1074 17.4289 32.9247 17.1731 33.8626C16.7126 35.6068 15.4506 37.7787 14.5979 39.1115C16.5421 39.6874 18.5885 40 20.7373 40C32.1803 40 41.4575 31.049 41.4575 20.0082C41.4405 8.95104 32.1632 0 20.7202 0Z"
      fill="#301C13"
    />
  </svg>
);

export const MiniStarIcon = ({ width = '8', height = '8', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 0L5.08036 2.91964L8 4L5.08036 5.08036L4 8L2.91964 5.08036L0 4L2.91964 2.91964L4 0Z"
      fill="#6E5544"
    />
  </svg>
);

export const BellRingIcon = ({ width = '24', height = '24', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
    // viewBox={`0 0 ${width} ${height}`}
  >
    <path
      fill="current-color"
      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7c0-2.42-1.72-4.44-4.005-4.901z"
    />
  </svg>
);

export const HomeIcon = ({ width = '28', height = '28', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36 36"
  >
    <path
      fill="current-color"
      d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19Z"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <path
      fill="current-color"
      d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
      className="clr-i-solid clr-i-solid-path-2"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export const ProductIcon = ({ width = '28', height = '28', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="current-color"
      d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074c-.021-.057-.04-.113-.07-.165c-.016-.027-.038-.049-.057-.075c-.032-.045-.063-.091-.102-.13c-.023-.022-.053-.04-.078-.061c-.039-.032-.075-.067-.12-.094c-.004-.003-.009-.003-.014-.006l-.008-.006l-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073c-.036.027-.074.051-.106.082c-.03.031-.053.067-.079.102c-.027.035-.057.066-.079.104c-.026.043-.04.092-.059.139c-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987l.001.001l.002.001l.02.011c.043.024.09.037.135.054c.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039c.045-.017.092-.029.135-.054l.02-.011l.002-.001l.001-.001l8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005L7.82 6.477l6.834 3.905l-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247l-6.83-3.903l2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"
    />
  </svg>
);

export const CategoryIcon = ({ width = '28', height = '28', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="current-color"
      d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4z"
    />
  </svg>
);

export const CustomerIcon = ({ width = '28', height = '28', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1408 1664"
  >
    <path
      fill="current-color"
      d="m576 1536l96-448l-96-128l-128-64zm256 0l128-640l-128 64l-96 128zM992 526q-2-4-4-6q-10-8-96-8q-70 0-167 19q-7 2-21 2t-21-2q-97-19-167-19q-86 0-96 8q-2 2-4 6q2 18 4 27q2 3 7.5 6.5T435 570q2 4 7.5 20.5t7 20.5t7.5 17t8.5 17t9 14t12 13.5t14 9.5t17.5 8t20.5 4t24.5 2q36 0 59-12.5t32.5-30T669 619t11.5-29.5T698 577h12q11 0 17.5 12.5T739 619t14.5 34.5t32.5 30t59 12.5q13 0 24.5-2t20.5-4t17.5-8t14-9.5t12-13.5t9-14t8.5-17t7.5-17t7-20.5T973 570q2-7 7.5-10.5t7.5-6.5q2-9 4-27zm416 879q0 121-73 190t-194 69H267q-121 0-194-69T0 1405q0-61 4.5-118t19-125.5T61 1038t63.5-103.5T218 860l-90-220h214q-22-64-22-128q0-12 2-32q-194-40-194-96q0-57 210-99q17-62 51.5-134T460 37q32-37 76-37q30 0 84 31t84 31t84-31t84-31q44 0 76 37q36 42 70.5 114t51.5 134q210 42 210 99q0 56-194 96q7 81-20 160h214l-82 225q63 33 107.5 96.5T1371 1105t29 151.5t8 148.5z"
    />
  </svg>
);

export const OrderIcon = ({ width = '28', height = '28', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 640 512"
  >
    <path
      fill="current-color"
      d="M0 48C0 21.49 21.49 0 48 0h320c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c0 53-43 96-96 96c-53.9 0-96-43-96-96H256c0 53-43 96-96 96c-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48V48zm544 208v-18.7L466.7 160H416v96h128zM160 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm320-96c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zM256.1 95.03c-8.5-9.37-23.7-9.37-33.1 0c-9.3 9.37-9.3 24.57 0 33.07l39.1 39.9H96c-13.25 0-24 10.7-24 24s10.75 24 24 24h166.1L223 255c-9.3 9.4-9.3 24.6 0 33.1c9.4 10.2 24.6 10.2 33.1 0l80-80c10.2-8.5 10.2-23.7 0-33.1l-80-79.97z"
    />
  </svg>
);

export const MinusIcon = ({ width = '20', height = '4', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2L2 2" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" />
    <path
      d="M18 2L2 2"
      stroke="currentColor"
      strokeOpacity="0"
      strokeWidth="2.66667"
      strokeLinecap="round"
    />
  </svg>
);

export const PlusIcon = ({ width = '32', height = '32', className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8L16 24" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" />
    <path
      d="M16 8L16 24"
      stroke="black"
      strokeOpacity="0"
      strokeWidth="2.66667"
      strokeLinecap="round"
    />
    <path d="M24 16L8 16" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" />
    <path
      d="M24 16L8 16"
      stroke="black"
      strokeOpacity="0"
      strokeWidth="2.66667"
      strokeLinecap="round"
    />
  </svg>
);

export const Ba = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7c0-2.42-1.72-4.44-4.005-4.901z"
    />
  </svg>
);

export const CircleIcon = ({ width, height, cx1, cy1, r1, cx2, cy2, r2, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {cx1 && <circle cx={cx1} cy={cy1} r={r1} fill="#B78D71" fillOpacity="0.15" />}
    {cx2 && <circle cx={cx2} cy={cy2} r={r2} fill="#B78D71" fillOpacity="0.1" />}
  </svg>
);

export const CircleDashIcon = ({
  width,
  height,
  cx1,
  cy1,
  r1,
  d,
  cx2,
  cy2,
  r2,
  className,
  ...other
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {cx1 && (
      <circle
        cx={cx1}
        cy={cy1}
        r={r1}
        stroke="#B78D71"
        strokeOpacity="0.5"
        strokeDasharray="25 25"
        {...other}
      />
    )}
    <path d={d} stroke="#B78D71" strokeOpacity="0.5" strokeDasharray="25 25" {...other} />
    <circle
      cx={cx2}
      cy={cy2}
      r={r2}
      stroke="#B78D71"
      strokeOpacity="0.5"
      strokeDasharray="25 25"
      {...other}
    />
  </svg>
);
