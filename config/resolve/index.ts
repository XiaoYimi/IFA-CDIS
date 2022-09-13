import type { ResolveOptions, AliasOptions } from 'vite';

/** Loaded App DataTypes */
import { Create_APP_AliasOptions } from './modules/alias';

/** Define App DataTypes */
declare interface CreateAPPResolveOptions {
  (): ResolveOptions & {
    alias: AliasOptions;
  };
}

/**
 * @description create resolve option of vite config
 * @param {}
 * @return {CreateAPPResolveOptions}
 */
export const Create_APP_ResolveOptions: CreateAPPResolveOptions = () => ({
  alias: Create_APP_AliasOptions(),
});
