const test = require("ava");

const translate = require("./index");

test('translate without any options', async t => {
    try {
        const res = await translate("让我们来翻译吧!");

        t.is(res.trans_result.dst, "Let's translate it!");
    } catch (err) {
        t.fail(err);
    }
});