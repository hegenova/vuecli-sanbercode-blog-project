import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark:false,
        themes: {
          light: {
            primary: colors.green,
            secondary: colors.grey.darken1,
            anchor: colors.grey.darken1,
            background: '#FAFAFA'
          },

          dark: {
            primary: colors.purple.darken3,
            secondary: colors.indigo.darken3,
            accent: colors.white,
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            background:'#141414'
          },
        },
      }
});