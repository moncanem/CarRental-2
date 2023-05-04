export function Footer(props){
    return (
        <footer className={props.className}>
            <section>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </section>
        </footer>
    );
}