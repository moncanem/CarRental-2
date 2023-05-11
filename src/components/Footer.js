export function Footer(props){
    return (
        <header className={props.class_component}>
            <section>
                <h1>{props.title}</h1>
                <strong>{props.content}</strong>
            </section>
        </header>
    );
}