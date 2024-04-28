import * as parser from "@vue/compiler-sfc";
import fs from "fs";
import path from "path";

export class Main {
  srcPath = path.resolve("D:\\jmall\\forked-gwms\\gwms\\src");
  filePath = path.resolve(process.cwd(), "./template/gwms-product-details.vue");
  tags = new Set();
  file = fs.readFileSync(this.filePath, {
    encoding: "utf8",
  });
  dec = parser.parse(this.file);
  templateAst = this.dec.descriptor.template?.ast;
  // SFCTemplateBlock["ast"] | SFCBlock
  dfs(target: any, handle: Function) {
    if (target?.children && target.children.length > 0) {
      target.children.forEach((child) => {
        this.dfs(child, handle);
      });
    } else {
      console.log(target.tag);
      handle(target);
    }
  }

  run() {
    this.dfs(this.templateAst, (target: any) => {
      console.log(target.tag);
      this.tags.add(target.tag);
    });
  }
}
