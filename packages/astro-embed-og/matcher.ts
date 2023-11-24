// matches any url, it does seems to be a issue if placed before others matchers in remark-plugin
// as it is now (last one to match), seems to be ok
// TODO: Check if possible to allow end user to set an allow list or exclusive domain
const urlPattern = /(https?:\/\/\S+)/;

export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}
