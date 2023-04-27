const FlexColumn = ({ children }) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {children}
        </div>
    )
}

export default FlexColumn;