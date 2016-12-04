const getParent = ($parent, cssClass) => {
  if (!$parent.$el) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return $parent.$parent;
};

export default {
  getParent
};