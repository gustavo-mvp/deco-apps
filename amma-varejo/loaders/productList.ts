//TODO - PRODUCT LISTINING LOADER
import type { Product } from "../../commerce/types.ts";
import type { AppContext } from "../mod.ts";
/* import { toProduct } from "../utils/transform.ts";
import { AmmaProduct } from "../types.ts"; */

/**
 * @title Amma Varejo
 * @description Listagem de Produtos
 */
const loader = async (
  _props: unknown,
  _req: Request,
  _ctx: AppContext
): Promise<Product[] | null> => {
  await 0;
  return null;
};

export default loader;
