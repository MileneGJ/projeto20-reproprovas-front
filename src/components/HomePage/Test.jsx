
export default function Test({ name, pdfUrl, categoryName, teacherName }) {
        return (
                <a href={pdfUrl}>
                    <h3>
                        {categoryName}
                    </h3>
                    <p>
                        {`${name} - (${teacherName})`}
                    </p>
                </a>
        )
    }