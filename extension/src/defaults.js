const defaults = new Map([
	['rootUrl', 'https://api.github.com/'],
	['oauthToken', ''],
	['useParticipatingCount', false],
	['interval', 60],
	['title', 'Notifier for GitHub']
]);

const notificationReasons = new Map([
	['subscribed', 'You are watching the repository'],
	['manual', 'You are subscribed to this thread'],
	['author', 'You created this thread'],
	['comment', 'New comment'],
	['mention', 'You were mentioned'],
	['team_mention', 'Your team was mentioned'],
	['state_change', 'Thread status changed'],
	['assign', 'You were assigned to the issue']
]);

const errorTitles = new Map([
	['missing token', 'Missing access token, please create one and enter it in Options'],
	['server error', 'You have to be connected to the Internet'],
	['data format error', 'Unable to find countt'],
	['parse error', 'Unable to handle server response'],
	['default', 'Unknown error']
]);

const errorSymbols = new Map([
	['missing token', 'X'],
	['default', '?']
]);

const warningTitles = new Map([
	['default', 'Unknown warning'],
	['offline', 'No Internet connnection']
]);

const warningSymbols = new Map([
	['default', 'warn'],
	['offline', 'off']
]);

const colors = new Map([
	['default', [65, 131, 196, 255]],
	['error', [166, 41, 41, 255]],
	['warning', [245, 159, 0, 255]]
]);

exports = defaults;
module.exports = exports;

exports.getBadgeDefaultColor = () => {
	return colors.get('default');
};

exports.getBadgeErrorColor = () => {
	return colors.get('error');
};

exports.getBadgeWarningColor = () => {
	return colors.get('warning');
};

exports.getWarningTitle = warning => {
	return warningTitles.get(warning) || warningTitles.get('default');
};

exports.getWarningSymbol = warning => {
	return warningSymbols.get(warning) || warningSymbols.get('default');
};

exports.getErrorTitle = error => {
	return errorTitles.get(error.message) || errorTitles.get('default');
};

exports.getErrorSymbol = error => {
	return errorSymbols.get(error.message) || errorSymbols.get('default');
};

exports.getNotificationReasonText = reason => {
	return notificationReasons.get(reason) || '';
};

exports.defaultTitle = defaults.get('title');
