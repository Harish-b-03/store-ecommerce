const CartIcon = ({
  color = 'currentColor',
  width = '30px',
  height = '30px',
  ...props
}) => {
  return (
    <svg 
        width={width}
        height={height}
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg" 
        stroke-width="3" 
        stroke={color} 
        fill="none"
        {...props}
    >
        <polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79"/>
        <path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22"/>
        <circle cx="24.95" cy="51.61" r="3.53"/>
        <circle cx="46.04" cy="51.61" r="3.53"/>
    </svg>
  )
}

export default CartIcon