const router = require('./lib/router'),
    registerHelpers = require('./lib/helpers'),
    urlUtils = require('../../../server/lib/url-utils'),

    // Dirty requires
    settingsCache = require('../../../server/services/settings/cache');

function ampRouter(req, res) {
    if (settingsCache.get('amp') === true) {
        return router.apply(this, arguments);
    } else {
        // routeKeywords.amp: 'amp'
        let redirectUrl = req.originalUrl.replace(/amp\/$/, '');
        urlUtils.redirect301(res, redirectUrl);
    }
}

module.exports = {
    activate: function activate(ghost) {
        // routeKeywords.amp: 'amp'
        let ampRoute = '*/amp/';

        ghost.routeService.registerRouter(ampRoute, ampRouter);

        registerHelpers(ghost);
    }
};
