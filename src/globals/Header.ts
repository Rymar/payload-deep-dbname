import type { GlobalConfig } from 'payload';

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'itemsLvl1',
      type: 'array',
      dbName: 'header_items_lvl1',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'itemsLvl2',
          type: 'array',
          dbName: 'header_items_lvl2',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'itemsLvl3',
              type: 'array',
              dbName: 'header_items_lvl3',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                },
                {
                  name: 'itemsLvl4',
                  type: 'array',
                  dbName: 'header_items_lvl4',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
