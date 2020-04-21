import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

const volounteerActionForm = new SimpleSchema({
    title: {
        type: String,
        max: 120,
        uniforms: {
            readonly: true
        }
    },
    description: {
        type: String,
        max: 120,
        uniforms: {
            readonly: true
        }
    },
    products: {
        type: String,
        max: 220,
        uniforms: {
            readonly: true
        }
    },
    status: {
        type: String,
        max: 220,
        uniforms: {
            readonly: true
        }
    },
    actionType: {
        type: String,
        max: 400
    },
    reciever: {
        name: {
            type: String,
            max: 220,
            uniforms: {
                readonly: true
            }
        },
        phone: {
            type: String,
            max: 220,
            uniforms: {
                readonly: true
            }
        },
        address1: {
            type: String,
            max: 220,
            uniforms: {
                readonly: true
            }
        },
        address2: {
            type: String,
            max: 220,
            uniforms: {
                readonly: true
            }
        },
        prefferedProducts: {
            type: String,
            max: 220,
            uniforms: {
                readonly: true
            }
        }
    }
} as any);

export default new SimpleSchema2Bridge(volounteerActionForm);