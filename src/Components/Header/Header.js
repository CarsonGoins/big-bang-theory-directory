const Header =  (props) =>{
    const styles = {
        padding: "10px",
        color: "blue",
        boxShadow: "1px 3px 10px rgb(0 0 0 / 0.2)",
        backgroundColor: props.backgroundColor
    }
return (
    // All data must be wrapped with parent element
    <header  style={styles}>
        <h1>{props.children}</h1>
    </header>
)
}

export default Header;