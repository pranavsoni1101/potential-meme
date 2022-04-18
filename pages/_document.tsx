import Document, {
    Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};  
    }
    render(): ReactElement {
        return(
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;