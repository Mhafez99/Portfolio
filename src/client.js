import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '1qx100j8',
    dataset: 'production',
    apiVersion: '2023-03-01',
    useCdn: true,
    token: 'skYrjMisBH1gKBUFbcgVgJeH853gQ5mqyFcGExFLXFlfmyM4Gf8IQ4TpLo8Yz2Uzyr26LhtgRR8NWYBVqVuw4z3jksHtms52OLZhU419Ln7cDxDWzVUEjWDlvzNbjrrO2kJPI7NXU0I5m9L3OzcWK20TOuIMTiukHvj3bFbEEe9JRj3IrFXD',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);