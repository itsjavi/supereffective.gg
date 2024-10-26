import z, { z as z$1 } from 'zod'
import { Ability as Ability$1 } from '@pkmn/dex'

declare const PKM_LATEST_GENERATION = 9
declare const PKM_LATEST_GAMESET = 'sv'
declare const PKM_LATEST_REGION = 'paldea'
declare const PKM_LATEST_POKEDEX = 'paldea'
declare const PKM_SWITCH_GAMESET_IDS: string[]

declare const abilitySchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
  },
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
  }
>
type Ability = z.infer<typeof abilitySchema>

declare const boxPresetIndexItemSchema: z.ZodObject<
  {
    id: z.ZodString
    gameSet: z.ZodString
    legacyId: z.ZodNullable<z.ZodString>
    name: z.ZodString
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameSet: string
    legacyId: string | null
  },
  {
    id: string
    name: string
    gameSet: string
    legacyId: string | null
  }
>
type BoxPresetIndexItem = z.infer<typeof boxPresetIndexItemSchema>
declare const boxPresetBoxPokemonSchema: z.ZodUnion<
  [
    z.ZodNullable<z.ZodString>,
    z.ZodObject<
      {
        pid: z.ZodString
        gmax: z.ZodOptional<z.ZodBoolean>
        shinyLocked: z.ZodOptional<z.ZodBoolean>
        shiny: z.ZodOptional<z.ZodBoolean>
      },
      'strip',
      z.ZodTypeAny,
      {
        pid: string
        gmax?: boolean | undefined
        shinyLocked?: boolean | undefined
        shiny?: boolean | undefined
      },
      {
        pid: string
        gmax?: boolean | undefined
        shinyLocked?: boolean | undefined
        shiny?: boolean | undefined
      }
    >,
  ]
>
declare const boxPresetBoxSchema: z.ZodObject<
  {
    title: z.ZodOptional<z.ZodString>
    pokemon: z.ZodArray<
      z.ZodUnion<
        [
          z.ZodNullable<z.ZodString>,
          z.ZodObject<
            {
              pid: z.ZodString
              gmax: z.ZodOptional<z.ZodBoolean>
              shinyLocked: z.ZodOptional<z.ZodBoolean>
              shiny: z.ZodOptional<z.ZodBoolean>
            },
            'strip',
            z.ZodTypeAny,
            {
              pid: string
              gmax?: boolean | undefined
              shinyLocked?: boolean | undefined
              shiny?: boolean | undefined
            },
            {
              pid: string
              gmax?: boolean | undefined
              shinyLocked?: boolean | undefined
              shiny?: boolean | undefined
            }
          >,
        ]
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    pokemon: (
      | string
      | {
          pid: string
          gmax?: boolean | undefined
          shinyLocked?: boolean | undefined
          shiny?: boolean | undefined
        }
      | null
    )[]
    title?: string | undefined
  },
  {
    pokemon: (
      | string
      | {
          pid: string
          gmax?: boolean | undefined
          shinyLocked?: boolean | undefined
          shiny?: boolean | undefined
        }
      | null
    )[]
    title?: string | undefined
  }
>
declare const boxPresetSchema: z.ZodObject<
  {
    id: z.ZodString
    legacyId: z.ZodString
    name: z.ZodString
    version: z.ZodNumber
    gameSet: z.ZodString
    description: z.ZodString
    boxes: z.ZodArray<
      z.ZodObject<
        {
          title: z.ZodOptional<z.ZodString>
          pokemon: z.ZodArray<
            z.ZodUnion<
              [
                z.ZodNullable<z.ZodString>,
                z.ZodObject<
                  {
                    pid: z.ZodString
                    gmax: z.ZodOptional<z.ZodBoolean>
                    shinyLocked: z.ZodOptional<z.ZodBoolean>
                    shiny: z.ZodOptional<z.ZodBoolean>
                  },
                  'strip',
                  z.ZodTypeAny,
                  {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  },
                  {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                >,
              ]
            >,
            'many'
          >
        },
        'strip',
        z.ZodTypeAny,
        {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        },
        {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }
      >,
      'many'
    >
    isHidden: z.ZodOptional<z.ZodBoolean>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameSet: string
    legacyId: string
    version: number
    description: string
    boxes: {
      pokemon: (
        | string
        | {
            pid: string
            gmax?: boolean | undefined
            shinyLocked?: boolean | undefined
            shiny?: boolean | undefined
          }
        | null
      )[]
      title?: string | undefined
    }[]
    isHidden?: boolean | undefined
  },
  {
    id: string
    name: string
    gameSet: string
    legacyId: string
    version: number
    description: string
    boxes: {
      pokemon: (
        | string
        | {
            pid: string
            gmax?: boolean | undefined
            shinyLocked?: boolean | undefined
            shiny?: boolean | undefined
          }
        | null
      )[]
      title?: string | undefined
    }[]
    isHidden?: boolean | undefined
  }
>
declare const boxPresetMapSchema: z.ZodRecord<
  z.ZodString,
  z.ZodRecord<
    z.ZodString,
    z.ZodObject<
      {
        id: z.ZodString
        legacyId: z.ZodString
        name: z.ZodString
        version: z.ZodNumber
        gameSet: z.ZodString
        description: z.ZodString
        boxes: z.ZodArray<
          z.ZodObject<
            {
              title: z.ZodOptional<z.ZodString>
              pokemon: z.ZodArray<
                z.ZodUnion<
                  [
                    z.ZodNullable<z.ZodString>,
                    z.ZodObject<
                      {
                        pid: z.ZodString
                        gmax: z.ZodOptional<z.ZodBoolean>
                        shinyLocked: z.ZodOptional<z.ZodBoolean>
                        shiny: z.ZodOptional<z.ZodBoolean>
                      },
                      'strip',
                      z.ZodTypeAny,
                      {
                        pid: string
                        gmax?: boolean | undefined
                        shinyLocked?: boolean | undefined
                        shiny?: boolean | undefined
                      },
                      {
                        pid: string
                        gmax?: boolean | undefined
                        shinyLocked?: boolean | undefined
                        shiny?: boolean | undefined
                      }
                    >,
                  ]
                >,
                'many'
              >
            },
            'strip',
            z.ZodTypeAny,
            {
              pokemon: (
                | string
                | {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                | null
              )[]
              title?: string | undefined
            },
            {
              pokemon: (
                | string
                | {
                    pid: string
                    gmax?: boolean | undefined
                    shinyLocked?: boolean | undefined
                    shiny?: boolean | undefined
                  }
                | null
              )[]
              title?: string | undefined
            }
          >,
          'many'
        >
        isHidden: z.ZodOptional<z.ZodBoolean>
      },
      'strip',
      z.ZodTypeAny,
      {
        id: string
        name: string
        gameSet: string
        legacyId: string
        version: number
        description: string
        boxes: {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }[]
        isHidden?: boolean | undefined
      },
      {
        id: string
        name: string
        gameSet: string
        legacyId: string
        version: number
        description: string
        boxes: {
          pokemon: (
            | string
            | {
                pid: string
                gmax?: boolean | undefined
                shinyLocked?: boolean | undefined
                shiny?: boolean | undefined
              }
            | null
          )[]
          title?: string | undefined
        }[]
        isHidden?: boolean | undefined
      }
    >
  >
>
type BoxPresetBoxPokemon = z.infer<typeof boxPresetBoxPokemonSchema>
type BoxPresetBox = z.infer<typeof boxPresetBoxSchema>
type BoxPreset = z.infer<typeof boxPresetSchema>
type BoxPresetMap = Map<string, Map<string, BoxPreset>>
type BoxPresetRecord = Record<string, Record<string, BoxPreset>>

declare const characteristicSchema: z.ZodObject<
  {
    id: z.ZodString
    description: z.ZodString
    highestStat: z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>
    ivs: z.ZodArray<z.ZodNumber, 'many'>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  },
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  }
>
type Characteristic = z.infer<typeof characteristicSchema>

declare const characterSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type Character = z.infer<typeof characterSchema>

declare const colorSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    color: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    color: string
  },
  {
    id: string
    name: string
    color: string
  }
>
type Color = z.infer<typeof colorSchema>

declare const nameSchema: z$1.ZodString
declare const slugSchema: z$1.ZodString
declare const generationNumSchema: z$1.ZodNumber
declare const descriptionSchema: z$1.ZodString
declare const detailSchema: z$1.ZodNullable<z$1.ZodString>
declare const hexColorSchema: z$1.ZodString
declare const statIdSchema: z$1.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>
type IDType = string
declare const baseEntitySchema: z$1.ZodObject<
  {
    id: z$1.ZodString
    name: z$1.ZodString
  },
  'strip',
  z$1.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type BaseEntity = z$1.infer<typeof baseEntitySchema>

declare const gameFeatureSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type GameFeature = z.infer<typeof gameFeatureSchema>

declare const gameSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    fullName: z.ZodOptional<z.ZodString>
    generation: z.ZodNumber
    type: z.ZodEnum<['superset', 'set', 'game', 'dlc']>
    gameSet: z.ZodNullable<z.ZodString>
    gameSuperSet: z.ZodNullable<z.ZodString>
    codename: z.ZodNullable<z.ZodString>
    releaseDate: z.ZodString
    platforms: z.ZodArray<z.ZodEnum<['gb', 'gbc', 'gba', 'nds', '3ds', 'switch', 'mobile']>, 'many'>
    region: z.ZodNullable<z.ZodString>
    originMark: z.ZodNullable<z.ZodString>
    pokedexes: z.ZodArray<z.ZodString, 'many'>
    features: z.ZodObject<
      {
        training: z.ZodBoolean
        shiny: z.ZodBoolean
        items: z.ZodBoolean
        gender: z.ZodBoolean
        nature: z.ZodBoolean
        ball: z.ZodBoolean
        mega: z.ZodBoolean
        zmove: z.ZodBoolean
        gmax: z.ZodBoolean
        alpha: z.ZodBoolean
        tera: z.ZodBoolean
        ribbons: z.ZodBoolean
        marks: z.ZodBoolean
      },
      'strip',
      z.ZodTypeAny,
      {
        gmax: boolean
        shiny: boolean
        training: boolean
        items: boolean
        gender: boolean
        nature: boolean
        ball: boolean
        mega: boolean
        zmove: boolean
        alpha: boolean
        tera: boolean
        ribbons: boolean
        marks: boolean
      },
      {
        gmax: boolean
        shiny: boolean
        training: boolean
        items: boolean
        gender: boolean
        nature: boolean
        ball: boolean
        mega: boolean
        zmove: boolean
        alpha: boolean
        tera: boolean
        ribbons: boolean
        marks: boolean
      }
    >
    storage: z.ZodObject<
      {
        numBoxes: z.ZodNumber
        boxCapacity: z.ZodNumber
      },
      'strip',
      z.ZodTypeAny,
      {
        numBoxes: number
        boxCapacity: number
      },
      {
        numBoxes: number
        boxCapacity: number
      }
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  },
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  }
>
type Game = z.infer<typeof gameSchema>

declare const generationSchema: z.ZodObject<
  {
    id: z.ZodNumber
    minDexNum: z.ZodNumber
    maxDexNum: z.ZodNumber
  },
  'strip',
  z.ZodTypeAny,
  {
    id: number
    minDexNum: number
    maxDexNum: number
  },
  {
    id: number
    minDexNum: number
    maxDexNum: number
  }
>
type Generation = z.infer<typeof generationSchema>

declare const itemCategorySchema: z.ZodEnum<
  ['ball', 'medicine', 'battle', 'berry', 'holdable', 'evolution', 'machine', 'treasure', 'ingredient', 'key', 'other']
>
type ItemCategory = z.infer<typeof itemCategorySchema>
declare const itemSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
    category: z.ZodEnum<
      [
        'ball',
        'medicine',
        'battle',
        'berry',
        'holdable',
        'evolution',
        'machine',
        'treasure',
        'ingredient',
        'key',
        'other',
      ]
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category:
      | 'ball'
      | 'medicine'
      | 'battle'
      | 'berry'
      | 'holdable'
      | 'evolution'
      | 'machine'
      | 'treasure'
      | 'ingredient'
      | 'key'
      | 'other'
  },
  {
    id: string
    name: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category:
      | 'ball'
      | 'medicine'
      | 'battle'
      | 'berry'
      | 'holdable'
      | 'evolution'
      | 'machine'
      | 'treasure'
      | 'ingredient'
      | 'key'
      | 'other'
  }
>
type Item = z.infer<typeof itemSchema>

declare const languageSchema: z.ZodObject<
  {
    id: z.ZodEnum<['en', 'es', 'fr', 'de', 'it', 'ja', 'ja_ro', 'ko', 'chs', 'cht']>
    name: z.ZodString
    nameEng: z.ZodString
    alpha3: z.ZodEnum<['eng', 'esp', 'fra', 'deu', 'ita', 'jap', 'jap_ro', 'kor', 'chs', 'cht']>
    locale: z.ZodString
    flag: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: 'en' | 'es' | 'fr' | 'de' | 'it' | 'ja' | 'ja_ro' | 'ko' | 'chs' | 'cht'
    name: string
    nameEng: string
    alpha3: 'chs' | 'cht' | 'eng' | 'esp' | 'fra' | 'deu' | 'ita' | 'jap' | 'jap_ro' | 'kor'
    locale: string
    flag: string
  },
  {
    id: 'en' | 'es' | 'fr' | 'de' | 'it' | 'ja' | 'ja_ro' | 'ko' | 'chs' | 'cht'
    name: string
    nameEng: string
    alpha3: 'chs' | 'cht' | 'eng' | 'esp' | 'fra' | 'deu' | 'ita' | 'jap' | 'jap_ro' | 'kor'
    locale: string
    flag: string
  }
>
type PokeLanguage = z.infer<typeof languageSchema>
type PokeLanguageId = PokeLanguage['id']
type PokeLanguageAlpha3 = PokeLanguage['alpha3']

declare const locationSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    gameIds: z.ZodUnion<[z.ZodArray<z.ZodString, 'many'>, z.ZodLiteral<'*'>]>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    gameIds: string[] | '*'
  },
  {
    id: string
    name: string
    gameIds: string[] | '*'
  }
>
type Location = z.infer<typeof locationSchema>

declare const markSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    title: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodString
    conditions: z.ZodString
    chance: z.ZodString
    chanceCharm: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    conditions: string
    chance: string
    chanceCharm: string
  },
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    conditions: string
    chance: string
    chanceCharm: string
  }
>
type Mark = z.infer<typeof markSchema>

declare const moveSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    psName: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodNullable<z.ZodString>
    shortDesc: z.ZodString
    type: z.ZodString
    power: z.ZodNumber
    accuracy: z.ZodNumber
    pp: z.ZodNumber
    category: z.ZodEnum<['physical', 'special', 'status']>
    priority: z.ZodNumber
    isZ: z.ZodBoolean
    isGmax: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    type: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category: 'status' | 'physical' | 'special'
    power: number
    accuracy: number
    pp: number
    priority: number
    isZ: boolean
    isGmax: boolean
  },
  {
    id: string
    name: string
    type: string
    psName: string
    generation: number
    desc: string | null
    shortDesc: string
    category: 'status' | 'physical' | 'special'
    power: number
    accuracy: number
    pp: number
    priority: number
    isZ: boolean
    isGmax: boolean
  }
>
type Move = z.infer<typeof moveSchema>

declare const natureSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    raises: z.ZodNullable<z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>>
    lowers: z.ZodNullable<z.ZodEnum<['hp', 'atk', 'def', 'spa', 'spd', 'spe', 'acc', 'eva']>>
    berry: z.ZodNullable<z.ZodString>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  },
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  }
>
type Nature = z.infer<typeof natureSchema>

declare const originMarkSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
  },
  {
    id: string
    name: string
  }
>
type OriginMark = z.infer<typeof originMarkSchema>

declare const pokedexItemIndexSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    region: z.ZodNullable<z.ZodString>
    baseDex: z.ZodNullable<z.ZodString>
    pokeApiId: z.ZodOptional<z.ZodNumber>
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  },
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
type PokedexIndexItem = z.infer<typeof pokedexItemIndexSchema>
declare const pokedexEntrySchema: z.ZodObject<
  {
    id: z.ZodString
    dexNum: z.ZodOptional<z.ZodNumber>
    isForm: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    isForm: boolean
    dexNum?: number | undefined
  },
  {
    id: string
    isForm: boolean
    dexNum?: number | undefined
  }
>
declare const pokedexSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    region: z.ZodNullable<z.ZodString>
    generation: z.ZodNumber
    gameIds: z.ZodArray<z.ZodString, 'many'>
    baseDex: z.ZodNullable<z.ZodString>
    pokeApiId: z.ZodOptional<z.ZodNumber>
    entries: z.ZodArray<
      z.ZodObject<
        {
          id: z.ZodString
          dexNum: z.ZodOptional<z.ZodNumber>
          isForm: z.ZodBoolean
        },
        'strip',
        z.ZodTypeAny,
        {
          id: string
          isForm: boolean
          dexNum?: number | undefined
        },
        {
          id: string
          isForm: boolean
          dexNum?: number | undefined
        }
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    entries: {
      id: string
      isForm: boolean
      dexNum?: number | undefined
    }[]
    generation: number
    region: string | null
    gameIds: string[]
    baseDex: string | null
    pokeApiId?: number | undefined
  },
  {
    id: string
    name: string
    entries: {
      id: string
      isForm: boolean
      dexNum?: number | undefined
    }[]
    generation: number
    region: string | null
    gameIds: string[]
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
type Pokedex = z.infer<typeof pokedexSchema>
type PokedexEntry = z.infer<typeof pokedexEntrySchema>

declare const pokemonIndexItemSchema: z.ZodObject<
  {
    id: z.ZodString
    nid: z.ZodString
    name: z.ZodString
    region: z.ZodString
    isForm: z.ZodBoolean
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  },
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  }
>
type PokemonIndexItem = z.infer<typeof pokemonIndexItemSchema>
declare const pokemonTextSchema: z.ZodObject<
  {
    name: z.ZodString
    genus: z.ZodString
    flavorText: z.ZodArray<
      z.ZodObject<
        {
          game: z.ZodString
          text: z.ZodString
        },
        'strip',
        z.ZodTypeAny,
        {
          game: string
          text: string
        },
        {
          game: string
          text: string
        }
      >,
      'many'
    >
  },
  'strip',
  z.ZodTypeAny,
  {
    name: string
    genus: string
    flavorText: {
      game: string
      text: string
    }[]
  },
  {
    name: string
    genus: string
    flavorText: {
      game: string
      text: string
    }[]
  }
>
type PokemonText = z.infer<typeof pokemonTextSchema>
declare const pokemonTextIndexSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>>
type PokemonTextIndex = z.infer<typeof pokemonTextIndexSchema>
declare const pokemonTextByLangSchema: z.ZodRecord<
  z.ZodString,
  z.ZodObject<
    {
      name: z.ZodString
      genus: z.ZodString
      flavorText: z.ZodArray<
        z.ZodObject<
          {
            game: z.ZodString
            text: z.ZodString
          },
          'strip',
          z.ZodTypeAny,
          {
            game: string
            text: string
          },
          {
            game: string
            text: string
          }
        >,
        'many'
      >
    },
    'strip',
    z.ZodTypeAny,
    {
      name: string
      genus: string
      flavorText: {
        game: string
        text: string
      }[]
    },
    {
      name: string
      genus: string
      flavorText: {
        game: string
        text: string
      }[]
    }
  >
>
type PokemonTextByLang = z.infer<typeof pokemonTextByLangSchema>
declare const pokemonSchema: z.ZodObject<
  {
    id: z.ZodString
    nid: z.ZodString
    dexNum: z.ZodNumber
    formId: z.ZodNullable<z.ZodString>
    name: z.ZodString
    formName: z.ZodNullable<z.ZodString>
    region: z.ZodString
    generation: z.ZodNumber
    type1: z.ZodString
    type2: z.ZodNullable<z.ZodString>
    /**
     * Forced tera type (e.g. for Ogerpon and Terapagos)
     */
    teraType: z.ZodNullable<z.ZodString>
    color: z.ZodString
    abilities: z.ZodObject<
      {
        primary: z.ZodString
        secondary: z.ZodNullable<z.ZodString>
        hidden: z.ZodNullable<z.ZodString>
      },
      'strict',
      z.ZodTypeAny,
      {
        primary: string
        secondary: string | null
        hidden: string | null
      },
      {
        primary: string
        secondary: string | null
        hidden: string | null
      }
    >
    isDefault: z.ZodBoolean
    isForm: z.ZodBoolean
    isLegendary: z.ZodBoolean
    isMythical: z.ZodBoolean
    isUltraBeast: z.ZodBoolean
    ultraBeastCode: z.ZodNullable<z.ZodString>
    isParadox: z.ZodOptional<z.ZodBoolean>
    paradoxSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
    isConvergent: z.ZodOptional<z.ZodBoolean>
    convergentSpecies: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>>
    isSpecialAbilityForm: z.ZodBoolean
    isCosmeticForm: z.ZodBoolean
    isFemaleForm: z.ZodBoolean
    hasGenderDifferences: z.ZodBoolean
    isBattleOnlyForm: z.ZodBoolean
    isSwitchableForm: z.ZodBoolean
    isFusion: z.ZodBoolean
    fusedWith: z.ZodNullable<z.ZodArray<z.ZodString, 'many'>>
    isMega: z.ZodBoolean
    isPrimal: z.ZodBoolean
    isGmax: z.ZodBoolean
    isRegional: z.ZodBoolean
    canGmax: z.ZodBoolean
    canDynamax: z.ZodBoolean
    canBeAlpha: z.ZodBoolean
    debutIn: z.ZodString
    obtainableIn: z.ZodArray<z.ZodString, 'many'>
    versionExclusiveIn: z.ZodArray<z.ZodString, 'many'>
    eventOnlyIn: z.ZodArray<z.ZodString, 'many'>
    storableIn: z.ZodArray<z.ZodString, 'many'>
    registrableIn: z.ZodArray<z.ZodString, 'many'>
    shinyReleased: z.ZodBoolean
    shinyBase: z.ZodNullable<z.ZodString>
    baseStats: z.ZodObject<
      {
        hp: z.ZodNumber
        atk: z.ZodNumber
        def: z.ZodNumber
        spa: z.ZodNumber
        spd: z.ZodNumber
        spe: z.ZodNumber
      },
      'strict',
      z.ZodTypeAny,
      {
        hp: number
        atk: number
        def: number
        spa: number
        spd: number
        spe: number
      },
      {
        hp: number
        atk: number
        def: number
        spa: number
        spd: number
        spe: number
      }
    >
    weight: z.ZodNumber
    height: z.ZodNumber
    maleRate: z.ZodNumber
    femaleRate: z.ZodNumber
    baseSpecies: z.ZodNullable<z.ZodString>
    baseForms: z.ZodArray<z.ZodString, 'many'>
    forms: z.ZodArray<z.ZodString, 'many'>
    family: z.ZodOptional<z.ZodNullable<z.ZodString>>
    evolvesFrom: z.ZodNullable<
      z.ZodObject<
        {
          pokemon: z.ZodOptional<z.ZodNullable<z.ZodString>>
          level: z.ZodOptional<z.ZodNumber>
          item: z.ZodOptional<z.ZodNullable<z.ZodString>>
          move: z.ZodOptional<z.ZodNullable<z.ZodString>>
          type: z.ZodOptional<z.ZodNullable<z.ZodString>>
          region: z.ZodOptional<z.ZodNullable<z.ZodString>>
          ability: z.ZodOptional<z.ZodNullable<z.ZodString>>
          condition: z.ZodOptional<z.ZodNullable<z.ZodString>>
        },
        'strict',
        z.ZodTypeAny,
        {
          type?: string | null | undefined
          pokemon?: string | null | undefined
          region?: string | null | undefined
          level?: number | undefined
          item?: string | null | undefined
          move?: string | null | undefined
          ability?: string | null | undefined
          condition?: string | null | undefined
        },
        {
          type?: string | null | undefined
          pokemon?: string | null | undefined
          region?: string | null | undefined
          level?: number | undefined
          item?: string | null | undefined
          move?: string | null | undefined
          ability?: string | null | undefined
          condition?: string | null | undefined
        }
      >
    >
    refs: z.ZodObject<
      {
        smogon: z.ZodString
        showdown: z.ZodString
        showdownName: z.ZodString
        serebii: z.ZodString
        bulbapedia: z.ZodString
      },
      'strict',
      z.ZodTypeAny,
      {
        smogon: string
        showdown: string
        showdownName: string
        serebii: string
        bulbapedia: string
      },
      {
        smogon: string
        showdown: string
        showdownName: string
        serebii: string
        bulbapedia: string
      }
    >
  },
  'strict',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    isGmax: boolean
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    teraType: string | null
    abilities: {
      primary: string
      secondary: string | null
      hidden: string | null
    }
    isDefault: boolean
    isLegendary: boolean
    isMythical: boolean
    isUltraBeast: boolean
    ultraBeastCode: string | null
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    hasGenderDifferences: boolean
    isBattleOnlyForm: boolean
    isSwitchableForm: boolean
    isFusion: boolean
    fusedWith: string[] | null
    isMega: boolean
    isPrimal: boolean
    isRegional: boolean
    canGmax: boolean
    canDynamax: boolean
    canBeAlpha: boolean
    debutIn: string
    obtainableIn: string[]
    versionExclusiveIn: string[]
    eventOnlyIn: string[]
    storableIn: string[]
    registrableIn: string[]
    shinyReleased: boolean
    shinyBase: string | null
    baseStats: {
      hp: number
      atk: number
      def: number
      spa: number
      spd: number
      spe: number
    }
    weight: number
    height: number
    maleRate: number
    femaleRate: number
    baseSpecies: string | null
    baseForms: string[]
    forms: string[]
    evolvesFrom: {
      type?: string | null | undefined
      pokemon?: string | null | undefined
      region?: string | null | undefined
      level?: number | undefined
      item?: string | null | undefined
      move?: string | null | undefined
      ability?: string | null | undefined
      condition?: string | null | undefined
    } | null
    refs: {
      smogon: string
      showdown: string
      showdownName: string
      serebii: string
      bulbapedia: string
    }
    isParadox?: boolean | undefined
    paradoxSpecies?: string[] | null | undefined
    isConvergent?: boolean | undefined
    convergentSpecies?: string[] | null | undefined
    family?: string | null | undefined
  },
  {
    id: string
    name: string
    generation: number
    color: string
    region: string
    isGmax: boolean
    dexNum: number
    isForm: boolean
    nid: string
    formId: string | null
    formName: string | null
    type1: string
    type2: string | null
    teraType: string | null
    abilities: {
      primary: string
      secondary: string | null
      hidden: string | null
    }
    isDefault: boolean
    isLegendary: boolean
    isMythical: boolean
    isUltraBeast: boolean
    ultraBeastCode: string | null
    isSpecialAbilityForm: boolean
    isCosmeticForm: boolean
    isFemaleForm: boolean
    hasGenderDifferences: boolean
    isBattleOnlyForm: boolean
    isSwitchableForm: boolean
    isFusion: boolean
    fusedWith: string[] | null
    isMega: boolean
    isPrimal: boolean
    isRegional: boolean
    canGmax: boolean
    canDynamax: boolean
    canBeAlpha: boolean
    debutIn: string
    obtainableIn: string[]
    versionExclusiveIn: string[]
    eventOnlyIn: string[]
    storableIn: string[]
    registrableIn: string[]
    shinyReleased: boolean
    shinyBase: string | null
    baseStats: {
      hp: number
      atk: number
      def: number
      spa: number
      spd: number
      spe: number
    }
    weight: number
    height: number
    maleRate: number
    femaleRate: number
    baseSpecies: string | null
    baseForms: string[]
    forms: string[]
    evolvesFrom: {
      type?: string | null | undefined
      pokemon?: string | null | undefined
      region?: string | null | undefined
      level?: number | undefined
      item?: string | null | undefined
      move?: string | null | undefined
      ability?: string | null | undefined
      condition?: string | null | undefined
    } | null
    refs: {
      smogon: string
      showdown: string
      showdownName: string
      serebii: string
      bulbapedia: string
    }
    isParadox?: boolean | undefined
    paradoxSpecies?: string[] | null | undefined
    isConvergent?: boolean | undefined
    convergentSpecies?: string[] | null | undefined
    family?: string | null | undefined
  }
>
type Pokemon = z.infer<typeof pokemonSchema>

declare const regionSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    generations: z.ZodArray<z.ZodNumber, 'many'>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generations: number[]
  },
  {
    id: string
    name: string
    generations: number[]
  }
>
type Region = z.infer<typeof regionSchema>

declare const ribbonSchema: z.ZodObject<
  {
    id: z.ZodString
    name: z.ZodString
    title: z.ZodString
    generation: z.ZodNumber
    desc: z.ZodString
    category: z.ZodEnum<['league', 'contest', 'tower', 'memory', 'gift']>
  },
  'strip',
  z.ZodTypeAny,
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    category: 'league' | 'contest' | 'tower' | 'memory' | 'gift'
  },
  {
    id: string
    name: string
    generation: number
    desc: string
    title: string
    category: 'league' | 'contest' | 'tower' | 'memory' | 'gift'
  }
>
type Ribbon = z.infer<typeof ribbonSchema>

declare const pokeTypeIdSchema: z.ZodEnum<
  [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
    'shadow',
    'stellar',
  ]
>
declare const pokeTypeSchema: z.ZodObject<
  {
    id: z.ZodEnum<
      [
        'normal',
        'fire',
        'water',
        'electric',
        'grass',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy',
        'shadow',
        'stellar',
      ]
    >
    name: z.ZodString
    color: z.ZodString
    isCanonical: z.ZodBoolean
  },
  'strip',
  z.ZodTypeAny,
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  },
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  }
>
type PokeType = z.infer<typeof pokeTypeSchema>
type PokeTypeId = z.infer<typeof pokeTypeIdSchema>

declare function getPokemonTextDataPath(pokemonId?: string): string
declare function getPokemonDataPath(pokemonId: string, regionId: string): string
declare function getPokedexDataPath(pokedexId: string, regionId: string | null | undefined): string
declare function pokeLangToAlpha3(lang: PokeLanguageId): PokeLanguageAlpha3
declare function alpha3ToPokeLang(alpha3: PokeLanguageAlpha3): PokeLanguageId
declare function getSourceCodeUrl(path: string, branch?: string, project?: 'dataset' | 'assets'): string

declare const pokemonColors: Color[]
declare const pokemonLanguages: PokeLanguage[]
declare const pokemonNatures: Nature[]
declare const pokemonOriginMarks: OriginMark[]
declare const pokemonRegions: Region[]
declare const pokemonTypes: PokeType[]
declare const pokemonGames: Game[]
declare const pokedexesIndex: PokedexIndexItem[]
declare const pokemonIndex: PokemonIndexItem[]
declare const pokemonGameFeatures: GameFeature[]
declare const pokemonCharacteristics: Characteristic[]
declare const pokemonCharacters: Character[]
declare const pokemonGenerations: Generation[]
declare const pokemonColorsMap: Map<
  string,
  {
    id: string
    name: string
    color: string
  }
>
declare const pokemonLanguagesMap: Map<
  'en' | 'es' | 'fr' | 'de' | 'it' | 'ja' | 'ja_ro' | 'ko' | 'chs' | 'cht',
  {
    id: 'en' | 'es' | 'fr' | 'de' | 'it' | 'ja' | 'ja_ro' | 'ko' | 'chs' | 'cht'
    name: string
    nameEng: string
    alpha3: 'chs' | 'cht' | 'eng' | 'esp' | 'fra' | 'deu' | 'ita' | 'jap' | 'jap_ro' | 'kor'
    locale: string
    flag: string
  }
>
declare const pokemonLanguagesById: Record<PokeLanguageId, PokeLanguage>
declare const pokemonNaturesMap: Map<
  string,
  {
    id: string
    name: string
    berry: string | null
    raises: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
    lowers: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva' | null
  }
>
declare const pokemonOriginMarksMap: Map<
  string,
  {
    id: string
    name: string
  }
>
declare const pokemonRegionsMap: Map<
  string,
  {
    id: string
    name: string
    generations: number[]
  }
>
declare const pokemonTypesMap: Map<
  string,
  {
    id:
      | 'normal'
      | 'fire'
      | 'water'
      | 'electric'
      | 'grass'
      | 'ice'
      | 'fighting'
      | 'poison'
      | 'ground'
      | 'flying'
      | 'psychic'
      | 'bug'
      | 'rock'
      | 'ghost'
      | 'dragon'
      | 'dark'
      | 'steel'
      | 'fairy'
      | 'shadow'
      | 'stellar'
    name: string
    color: string
    isCanonical: boolean
  }
>
declare const pokemonGamesMap: Map<
  string,
  {
    id: string
    name: string
    type: 'set' | 'superset' | 'game' | 'dlc'
    generation: number
    gameSet: string | null
    gameSuperSet: string | null
    codename: string | null
    releaseDate: string
    platforms: ('gb' | 'gbc' | 'gba' | 'nds' | '3ds' | 'switch' | 'mobile')[]
    region: string | null
    originMark: string | null
    pokedexes: string[]
    features: {
      gmax: boolean
      shiny: boolean
      training: boolean
      items: boolean
      gender: boolean
      nature: boolean
      ball: boolean
      mega: boolean
      zmove: boolean
      alpha: boolean
      tera: boolean
      ribbons: boolean
      marks: boolean
    }
    storage: {
      numBoxes: number
      boxCapacity: number
    }
    fullName?: string | undefined
  }
>
declare const pokedexesIndexMap: Map<
  string,
  {
    id: string
    name: string
    region: string | null
    baseDex: string | null
    pokeApiId?: number | undefined
  }
>
declare const pokemonIndexMap: Map<
  string,
  {
    id: string
    name: string
    region: string
    isForm: boolean
    nid: string
  }
>
declare const pokemonGameFeaturesMap: Map<
  string,
  {
    id: string
    name: string
  }
>
declare const pokemonCharacteristicsMap: Map<
  string,
  {
    id: string
    description: string
    highestStat: 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'acc' | 'eva'
    ivs: number[]
  }
>
declare const pokemonCharactersMap: Map<
  string,
  {
    id: string
    name: string
  }
>
declare const pokemonGenerationsMap: Map<
  number,
  {
    id: number
    minDexNum: number
    maxDexNum: number
  }
>

declare const pokeImgVariantFolder: {
  '2d': string
  '3d': string
  '3d-bordered': string
  pixelart: string
}
declare class SuperEffectiveCdnClient {
  readonly datasetBaseUrl: string
  readonly assetsBaseUrl: string
  constructor(datasetBaseUrl?: string, assetsBaseUrl?: string)
  getDataUrl(resourceName: string, ext?: string): string
  getAssetUrl(relativePath: string): string
  fetchData<T>(resourceName: string, init?: NextCompatibleRequestInit): Promise<T>
  fetchAllPokemon(init?: NextCompatibleRequestInit): Promise<Pokemon[]>
  fetchAllPokemonI18n(init?: NextCompatibleRequestInit): Promise<PokemonTextIndex>
  fetchPokemon(id: string, init?: NextCompatibleRequestInit): Promise<Pokemon>
  fetchPokemonI18n(id: string, init?: NextCompatibleRequestInit): Promise<PokemonTextByLang>
  fetchAllPokedexes(init?: NextCompatibleRequestInit): Promise<Pokedex[]>
  fetchPokedex(region: string, id: string, init?: NextCompatibleRequestInit): Promise<Pokedex>
  fetchAllBoxPresets(init?: NextCompatibleRequestInit): Promise<BoxPreset[]>
  fetchBoxPreset(gameSet: string, id: string, init?: NextCompatibleRequestInit): Promise<BoxPreset>
  fetchAbilities(init?: NextCompatibleRequestInit): Promise<Ability$1[]>
  fetchCharacters(init?: NextCompatibleRequestInit): Promise<Character[]>
  fetchItems(init?: NextCompatibleRequestInit): Promise<Item[]>
  fetchLocations(init?: NextCompatibleRequestInit): Promise<Location[]>
  fetchMoves(init?: NextCompatibleRequestInit): Promise<Move[]>
  fetchMarks(init?: NextCompatibleRequestInit): Promise<Mark[]>
  fetchRibbons(init?: NextCompatibleRequestInit): Promise<Ribbon[]>
  getPokemonImgUrl(nid: string, variant?: keyof typeof pokeImgVariantFolder, shiny?: boolean): string
  getGameImgUrl(id: string, variant?: 'logos' | 'symbols' | 'avatars' | 'tiles'): string
  getItemImgUrl(id: string): string
  getMarkImgUrl(id: string): string
  getRibbonImgUrl(id: string): string
  getCharacterImgUrl(id: string): string
  getTypeImgUrl(id: PokeTypeId | 'stellar' | string, variant?: 'gen8-style' | 'gen9-style'): string
}
/**
 * Native RequestInit, compatible with Next.js revalidate tags.
 *
 * @see https://nextjs.org/docs/api-reference/next.config.js/headers
 */
type NextCompatibleRequestInit = RequestInit & {
  next?: {
    tags?: Array<string>
    revalidate?: number
  }
}

export {
  type Ability,
  type BaseEntity,
  type BoxPreset,
  type BoxPresetBox,
  type BoxPresetBoxPokemon,
  type BoxPresetIndexItem,
  type BoxPresetMap,
  type BoxPresetRecord,
  type Character,
  type Characteristic,
  type Color,
  type Game,
  type GameFeature,
  type Generation,
  type IDType,
  type Item,
  type ItemCategory,
  type Location,
  type Mark,
  type Move,
  type Nature,
  type OriginMark,
  PKM_LATEST_GAMESET,
  PKM_LATEST_GENERATION,
  PKM_LATEST_POKEDEX,
  PKM_LATEST_REGION,
  PKM_SWITCH_GAMESET_IDS,
  type PokeLanguage,
  type PokeLanguageAlpha3,
  type PokeLanguageId,
  type PokeType,
  type PokeTypeId,
  type Pokedex,
  type PokedexEntry,
  type PokedexIndexItem,
  type Pokemon,
  type PokemonIndexItem,
  type PokemonText,
  type PokemonTextByLang,
  type PokemonTextIndex,
  type Region,
  type Ribbon,
  SuperEffectiveCdnClient,
  abilitySchema,
  alpha3ToPokeLang,
  baseEntitySchema,
  boxPresetBoxPokemonSchema,
  boxPresetBoxSchema,
  boxPresetIndexItemSchema,
  boxPresetMapSchema,
  boxPresetSchema,
  characterSchema,
  characteristicSchema,
  colorSchema,
  descriptionSchema,
  detailSchema,
  gameFeatureSchema,
  gameSchema,
  generationNumSchema,
  generationSchema,
  getPokedexDataPath,
  getPokemonDataPath,
  getPokemonTextDataPath,
  getSourceCodeUrl,
  hexColorSchema,
  itemCategorySchema,
  itemSchema,
  languageSchema,
  locationSchema,
  markSchema,
  moveSchema,
  nameSchema,
  natureSchema,
  originMarkSchema,
  pokeLangToAlpha3,
  pokeTypeIdSchema,
  pokeTypeSchema,
  pokedexEntrySchema,
  pokedexItemIndexSchema,
  pokedexSchema,
  pokedexesIndex,
  pokedexesIndexMap,
  pokemonCharacteristics,
  pokemonCharacteristicsMap,
  pokemonCharacters,
  pokemonCharactersMap,
  pokemonColors,
  pokemonColorsMap,
  pokemonGameFeatures,
  pokemonGameFeaturesMap,
  pokemonGames,
  pokemonGamesMap,
  pokemonGenerations,
  pokemonGenerationsMap,
  pokemonIndex,
  pokemonIndexItemSchema,
  pokemonIndexMap,
  pokemonLanguages,
  pokemonLanguagesById,
  pokemonLanguagesMap,
  pokemonNatures,
  pokemonNaturesMap,
  pokemonOriginMarks,
  pokemonOriginMarksMap,
  pokemonRegions,
  pokemonRegionsMap,
  pokemonSchema,
  pokemonTextByLangSchema,
  pokemonTextIndexSchema,
  pokemonTextSchema,
  pokemonTypes,
  pokemonTypesMap,
  regionSchema,
  ribbonSchema,
  slugSchema,
  statIdSchema,
}
