function App() {
    return (
        <React.Fragment>
            <HeaderPage />
            <MainContent/>
            <FooterContent/>
        </React.Fragment>
    );
}

const rootHtml = ReactDOM.createRoot(
    document.getElementById("root")
);
rootHtml.render(<App />);