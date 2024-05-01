import PreviewContent from "./../utils/PreviewContent";

export default function Preview({ previewContent }: { previewContent: PreviewContent | undefined }) {
    if (!previewContent) {
        return (
            <section className="preview">
                <p>
                    In order to scan the QR code, please select a file or turn on the camera on your device.
                </p>
            </section>
        )
    }

    switch (previewContent.type) {
        case "error":
            return (
                <section className="preview">
                    <p>
                        {previewContent.content}
                    </p>
                </section>
            )
        case "file":
            const imageSrc = URL.createObjectURL(previewContent.content);

            return (
                <section className="preview">
                    <img src={imageSrc} alt="Загруженное изображение" />
                </section>
            )
    }

}