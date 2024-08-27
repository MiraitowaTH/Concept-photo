function tweetMessage() {
    const message = "MIRAI TO WA KHAIMOOK\n#MiraitowaTH #KhaimookBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
