import React from "react";
import ReactMarkdown from "react-markdown";
import overview_english_markdown from "/static/markdown/english/overview.md";
import overview_chinese_markdown from "/static/markdown/chinese/overview.md";
import gettingstarted_english_markdown from "/static/markdown/english/getting-started.md";
import gettingstarted_chinese_markdown from "/static/markdown/chinese/getting-started.md";
import reference_english_markdown from "/static/markdown/english/reference.md";
import reference_chinese_markdown from "/static/markdown/chinese/reference.md";

function Content ( {
    chapter,
    chapters,
    language,
} ) {

    let markdown;

    switch ( chapter ) {

        case ( chapters[ language ][ 0 ] ):
            markdown = overview_english_markdown;
            break;

        case ( chapters[ language ][ 0 ] ):
            markdown = overview_chinese_markdown;
            break;

        case ( chapters[ language ][ 1 ] ):
            markdown = gettingstarted_english_markdown;
            break;

        case ( chapters[ language ][ 1 ] ):
            markdown = gettingstarted_chinese_markdown;
            break;

        case ( chapters[ language ][ 2 ] ):
            markdown = reference_english_markdown;
            break;

        case ( chapters[ language ][ 2 ] ):
            markdown = reference_chinese_markdown;
            break;

        default:
            throw new Error( `Unknow "chapter"` );

    }

    return <ReactMarkdown>{ markdown }</ReactMarkdown>;

}

export default Content;
