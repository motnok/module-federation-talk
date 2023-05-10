
interface BarItemProps {
    children: React.ReactNode
}

export const BarItem = ({
    children
}:BarItemProps) => {
    return <li>{children}</li>
}

export default BarItem;