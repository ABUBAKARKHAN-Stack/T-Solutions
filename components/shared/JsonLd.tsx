import { ALTERNATE_NAME, APP_NAME, BASE_URL } from "@/constants/app.constants";
import { socials } from "@/constants/navigation.constants";

type Props = {
  schema?: any;
};
const JsonLd = ({
  schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_NAME,
    alternateName: ALTERNATE_NAME,
    url: BASE_URL,
    "logo": "https://t-solutionz.com/assets/brand/logo.png",
    "sameAs": socials.map((s => s.url))
  },
}: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default JsonLd;
