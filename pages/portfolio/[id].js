import React  from 'react';
import Head from "next/head";
export async function getServerSideProps(context) {
    const res = await fetch(process.env.API_CUSTOM);
    const datas = await res.json();
    return { props: { data:datas.data.left.portfolios.allPortfolios[context.params.id-1] } };
}

function portfolio({data}) {
    return(
        <>
            <Head>
                <title>Portfolio {data.title}</title>
            </Head>
            <div>portfolio {data.title}</div>
        </>
)
;
}

export default portfolio;