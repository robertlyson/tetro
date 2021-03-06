import InputManager from 'client/managers/InputManager';
import SceneManager from 'client/managers/SceneManager';
import LoadingScene from 'client/scenes/LoadingScene';
import ControlsScene from 'client/scenes/ControlsScene';
import SoloGameScene from 'client/scenes/SoloGameScene';
import actions from 'client/constants/actions';
import keys from 'client/constants/keys';
import scenes from 'client/constants/scenes';

class Game {
  constructor(app) {
    this._app = app;

    this._inputManager = new InputManager().addActions({
      [actions.ROTATE_CW]: [keys.ARROW_UP, keys.X],
      [actions.ROTATE_CCW]: [keys.Z],
      [actions.SHIFT_LEFT]: [keys.ARROW_LEFT],
      [actions.SHIFT_RIGHT]: [keys.ARROW_RIGHT],
      [actions.SOFT_DROP]: [keys.ARROW_DOWN],
      [actions.HARD_DROP]: [keys.SPACE],
      [actions.PAUSE]: [keys.P],
      [actions.RETRY]: [keys.R],
      [actions.MUTE]: [keys.M]
    });

    this._sceneManager = new SceneManager({ app })
      .addScenes({
        [scenes.LOADING]: LoadingScene,
        [scenes.CONTROLS]: ControlsScene,
        [scenes.SOLO_GAME]: SoloGameScene
      })
      .loadScene(scenes.LOADING);
  }
}

export default Game;
