/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "SettingsProps" }]*/
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "defaultSettings" }]*/
import PropTypes from 'prop-types';

const SettingsProps = {
  /**
   * Probe settings
   */
  applicationSettings: PropTypes.shape({
    /**
     * Probe option
     */
    option: PropTypes.string,
  }),
};

export const defaultSettings = {
  applicationSettings: {
    option: 'Probe'
  }
};
