const path = require("path");
const babel = require("@babel/core");
const nextPreset = require("next/babel");

module.exports = {
	process(src, filename) {
		const filePath = path.relative(process.cwd(), filename);

		const iconName =
			filePath.indexOf("/") > -1 ? filePath.slice(filePath.lastIndexOf("/") + 1) : filePath;

		const code = babel.transform(
			`
        import React from 'react'; 
        export default () => (<svg data-filename="${iconName}" />);
      `,
			{
				filename,
				presets: [nextPreset],
				retainLines: true
			}
		).code;
		return { code };
	}
};
