const getParent = ($parent, cssClass) => {
  if (!parent || !$parent.$el || $parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getParent($parent.$parent);
};

const getNameOrUid = ($el) => {
  return $el.name ? $el.name : $el._uid;
};

export default {
  getParent,
  getNameOrUid
};