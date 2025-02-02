@file:Suppress("unused")

package io.kotest.engine

import io.kotest.core.config.AbstractProjectConfig
import io.kotest.core.config.configuration
import io.kotest.core.spec.Spec
import io.kotest.engine.config.ConfigManager

/**
 * Entry point for tests generated through the complier plugins, and so the
 * public api cannot have breaking changes.
 */
class TestEngineLauncher(
   val configs: List<AbstractProjectConfig>,
   val specs: List<Spec>,
) {

   constructor() : this(emptyList(), emptyList())

   fun withSpecs(vararg specs: Spec): TestEngineLauncher {
      return TestEngineLauncher(configs, specs.toList())
   }

   /**
    * Adds a [AbstractProjectConfig] that was detected by the compiler plugin.
    */
   fun withConfig(vararg projectConfig: AbstractProjectConfig): TestEngineLauncher {
      return TestEngineLauncher(configs + projectConfig, specs)
   }

   fun launch() {

      val config = TestEngineConfig.default()
         // initializes the global configuration and passes it to the test engine config
         .withConfig(ConfigManager.initialize(configuration, configs))

      val engine = TestEngine(config)
      engine.execute(TestSuite(specs, emptyList()))
   }
}
