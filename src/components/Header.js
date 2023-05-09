export function Header(props){
    return (
        <header className={props.class_component}>
            <section>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </section>
        </header>
    );
}