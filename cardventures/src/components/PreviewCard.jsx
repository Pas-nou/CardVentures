import "../styles/preview-card.css";

function PreviewCard() {
    return (
        <section className="section-preview">
            <div className="carte-preview carte-preview-l">
                <img
                    src="..\src\assets\CAPY5.webp"
                    alt=""
                    className="img-preview"
                />
            </div>

            <div className="carte-preview carte-preview-r">
                <div className="preview-msg preview-msg-l">
                    <p className="p-msg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus illum culpa sint. Possimus consequuntur eius repellendus ipsa aliquam, eveniet quia?</p>
                    <p className="p-name">nom expé.</p>
                </div>
                <div className="preview-msg preview-msg-r">
                    <img
                        className="timbre"
                        src="..\src\assets\TIMBRE.webp"
                        alt="timbre"
                    />
                    <p>nom dest.</p>
                    <p>adress dest.</p>
                </div>
            </div>
        </section>
    );
}

export default PreviewCard;
