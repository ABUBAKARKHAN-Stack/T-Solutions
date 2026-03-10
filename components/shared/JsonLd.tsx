import { ALTERNATE_NAME, APP_NAME, BASE_URL } from "@/constants/app.constants"

type Props = {
    schema?: any
}
const JsonLd = ({
    schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: APP_NAME,
        alternateName: ALTERNATE_NAME,
        url: BASE_URL,
    }
}: Props) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
        />
    )
}

export default JsonLd