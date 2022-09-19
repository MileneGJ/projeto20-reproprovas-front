
export default function Test({ name, pdfUrl, categoryName, detailName }) {
        return (
            <div>
                <a href={pdfUrl}>
                    <h3>
                        {categoryName}
                    </h3>
                    <p>
                        {`${name} - (${detailName})`}
                    </p>
                </a>
            </div>
        )
    }