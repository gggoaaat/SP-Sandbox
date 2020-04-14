import * as $ from "jquery";
import "../../polyfills";
import * as spEnv from "../../spa.spEnv";
import "../../spa.spCRUD";
import "../../dt-helper";
import "../../matth.uuid";
import "select2"

$(document).ready(function () {

	spEnv.$pa.spCRUD.clear({});

	spEnv.$pa.spCRUD.getList({
		objects: [
			{
				name: "Contracts",
				search: [""],
				singular: "Contract",
				table: {
					css: { "width": "200px", "min-width": "200px" },
					columns: [
						{
							name: "Title",
							css: { "width": "100px", "min-width": "100px" }
						}
					]
				}
			},
			{
				name: "Contractors",
				search: [""],
				singular: "Contractor",
				path: _spPageContextInfo.webAbsoluteUrl
			},
			{
				name: "Projects",
				search: [""],
				singular: "Project"
			}
		]
	});
});
