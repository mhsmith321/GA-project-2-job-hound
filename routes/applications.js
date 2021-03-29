const router = require("express").Router();
const applicationsCtrl = require('../controllers/applications');

/**     Router for directory '/applications'
*       All routes will assume to already have /applications
*       Eg:  route specified as '/bananas' will be processed as '/applications/bananas'
*/

/**     Function Structure Guide
 * 
 *          eg: router.get('/', todosCtrl.getIndex);
 * 
 *          router                          built-in feature of express, imported above
 *          .get                            HTTP method specified in the request
 *          '/'                             first arg, specifies filepath inside /todos
 *.         applicationsCtrl.Index          second arg, function to execute on the filepath
 */

/**     URL Routing Guide
 *          
 *          Route Used      Actual Route               Purpose
 *          /               /applications/             index
 *          /new            /applications/new          create a new todo
 *          /:id            /applications/:id          retrieve a particular applications by id
 */

/* GET Requests */
router.get('/', applicationsCtrl.index);
router.get('/new', applicationsCtrl.new)

/* POST Requests */
router.post('/', applicationsCtrl.create)

module.exports = router;