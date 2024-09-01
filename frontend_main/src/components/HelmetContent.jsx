import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROD_WEB_URL } from "../constants";

export function HelmetContent({title, description, robots, pageUrl, imageUrl, type}) {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='robots' content={robots} />
    <meta name='canonical' content={PROD_WEB_URL + pageUrl} />
    <meta name='viewport' content='width=device-width,initial-scale=1' />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={PROD_WEB_URL + pageUrl} />
    <meta property="og:type" content={type} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:creator" content='@haoweb' />
    </Helmet>
  )
}