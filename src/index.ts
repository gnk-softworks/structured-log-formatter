export function format(action: string, status:string, pairs?: Record<string, string>): string {
    const formattedPairs = pairs ? formatPairs(pairs) : "";
    return `${formatPair(["action", action])} ${formatPair(["status", status])} ${formattedPairs}`;
}

function formatPairs(pairs: Record<string, string>): string {
    return ` ${Object.entries(pairs).map(formatPair).join(" ")}`;
}

function formatPair([key, value]: [string, string]): string {
    return `${key}='${value}'`;
}