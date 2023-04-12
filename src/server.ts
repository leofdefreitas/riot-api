import createApp from "./app"
const logger = require("./logger");

const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`server running on port ${PORT}`));
logger.debug("teste");